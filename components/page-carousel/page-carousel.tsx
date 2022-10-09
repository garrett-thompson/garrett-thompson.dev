import { useWindowWidth } from "@react-hook/window-size";
import { Children, ReactNode } from "react";
import { usePageNavigation } from "../../hooks/use-page-navigation";
import { NavigationControls } from "../navigation-controls/navigation-controls";
import { CardPage } from "./card-page";

interface PageCarouselProps {
  children: React.ReactElement<PageProps>[] | React.ReactElement<PageProps>;
}

const Container = ({ children }: PageCarouselProps) => {
  const windowWidth = useWindowWidth();
  const [state, dispatch] = usePageNavigation(Children.count(children));

  return (
    <div>
      <NavigationControls
        onNext={() => dispatch({ type: "go_forward" })}
        onPrev={() => dispatch({ type: "go_back" })}
      />
      {Children.map(children, (child, i) => {
        return (
          <CardPage
            {...child.props}
            {...state}
            pageNumber={i + 1}
            windowWidth={windowWidth}
          />
        );
      })}
    </div>
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
