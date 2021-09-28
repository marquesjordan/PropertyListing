import {render, screen} from '@testing-library/react'
import Header from './Header'

describe("Header", () => {
   test("should render header", () => {
      render(<Header title="Some Title" />)
      expect(screen.getByTestId("Header")).toBeTruthy()
   })

   test("should render passed in title", () => {
      render(<Header title="Some Title" />)
      expect(screen.getByText("Some Title")).toBeTruthy()
   })
})