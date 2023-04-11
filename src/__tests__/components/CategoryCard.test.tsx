import { CategoryCard } from "@/components/ui";
import { CategoryType } from "@/types";

import { render, screen } from "@testing-library/react";

describe("CategoryCard", () => {
  test("Render in CategoryCard name", () => {
    const category: CategoryType = {
      id: 1,
      name: "Бытовая химия",
      img: "/assets/images/categories/category-1.png",
      slug: "household-chemicals",
    };
    render(<CategoryCard category={category} />);

    const name = screen.getByRole("heading", { name: category.name });

    expect(name).toBeInTheDocument();
  });
});
