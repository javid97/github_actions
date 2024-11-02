import { render } from "@testing-library/react";
import Component1 from "./Component1";

describe("Component1", () => {
	it("should render component1", () => {
		const { getByTestId } = render(<Component1 />);
		const component1 = getByTestId("component1");
		expect(component1).toBeInTheDocument();
	});
});
