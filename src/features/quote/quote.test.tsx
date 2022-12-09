import Quote from "./quote";
import { customRender } from "./../../test-utils";
import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Quote component",() => {
	it("An author is entered", async () => {
		customRender(<Quote/>);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		userEvent.type(input, "M");
		expect( await screen.findByText("Obtener cita")).toBeInTheDocument();
		expect(screen.queryByText("Obtener cita aleatoria")).not.toBeInTheDocument();
	});
	it("Simpson was searched", async () => {
		customRender(<Quote/>);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Simpson");
		const button = screen.getByText("Obtener cita");
		fireEvent.click(button);
		expect(await screen.findByText("I believe the children are the future... Unless we stop them now!")).toBeInTheDocument();
	});
	it("An erroneous value is entered", async () => {
		customRender(<Quote/>);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		userEvent.type(input, "7");
		const button = await screen.findByText("Obtener cita");
		fireEvent.click(button);
		expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
	});
	it("The search is deleted", async () => {
		customRender(<Quote/>);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		const cleanButton = screen.getByText("Borrar");
		await userEvent.type(input, "Homer");
		fireEvent.click(cleanButton);
		expect(await screen.findByPlaceholderText("Ingresa el nombre del autor")).toBeInTheDocument();
	});
	it("Obtain random quote", async () => {
		customRender(<Quote/>);
		const button = screen.getByText("Obtener cita aleatoria");
		fireEvent.click(button);
		expect(await screen.findByText("Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?")).toBeInTheDocument();
	});
	it("Loading message", async () => {
		customRender(<Quote/>);
		const button = screen.getByText("Obtener cita aleatoria");
		fireEvent.click(button);
		expect(await screen.findByText("Cargando..."));
	});
	it("Dont have quotes", async () => {
		customRender(<Quote/>);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Maggie");
		const button = screen.getByText("Obtener cita");
		fireEvent.click(button);
		expect(await screen.findByText("No se encontro ninguna cita")).toBeInTheDocument();
	});
});