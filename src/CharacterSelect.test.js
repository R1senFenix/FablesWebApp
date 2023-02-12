import { render, screen } from "@testing-library/react";
import CharacterSelect from "./CharacterSelect";

test("renders learn react link", () => {
    render(<CharacterSelect />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
