import {render} from "@testing-library/react";
import {Button} from "shared/ui/Button/Button";

describe('classNames', () => {
    test('with only first param ', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument();
    });