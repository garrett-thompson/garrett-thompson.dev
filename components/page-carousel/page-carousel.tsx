import { Children, ReactNode } from "react";
import { usePageNavigation } from "../../hooks/use-page-navigation";
import { CardPage } from "./card-page";

interface PageCarouselProps {
  children: React.ReactElement<PageProps>[] | React.ReactElement<PageProps>;
}

const Container = ({ children }: PageCarouselProps) => {
  const [state, dispatch] = usePageNavigation(Children.count(children));

  return (
    <>
      {Children.map(children, (child, i) => {
        return (
          <CardPage
            {...child.props}
            {...state}
            pageNumber={i + 1}
            onNext={() => dispatch({ type: "go_forward" })}
            onPrev={() => dispatch({ type: "go_back" })}
          />
        );
      })}
    </>
  );
};

interface PageProps {
  children: ReactNode;
}

// Implementation is overwritten in above with React.Children
const Page = (_: PageProps) => null;

export const PageCarousel = {
  Container,
  Page,
};
