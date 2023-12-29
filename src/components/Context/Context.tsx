import { createContext, PropsWithChildren, useState } from "react";
import {Doc} from "../../Types and examples";
import { doc as data } from "../../Maximal data collection";

type PresentationContextType = {
  presentation: Doc;
  setPresentation: (newPresentation: Doc) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
  presentation: {
    current: "",
    name: data.name,
    pages: [],
  },
  setPresentation: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
  const [presentation, setPresentation] = useState<Doc>({
    current: "",
    name: data.name,
    pages: [],
  });

  const handleSetPresentation = (newPresentation: Doc) => {
    setPresentation({ ...newPresentation });
  };

  return (
    <PresentationContext.Provider
      value={{
        presentation,
        setPresentation: handleSetPresentation,
      }}
      children={children}
    />
  );
}

export default PresentationProvider;