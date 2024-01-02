import { createContext, PropsWithChildren, useState } from "react";
import {Doc} from "../../Types and examples";
import { doc as data } from "../../Maximal data collection";

type PresentationContextType = {
  presentation: Doc;
  setPresentation: (newPresentation: Doc) => void;
  selectedBlockId: string;
  setSelectedBlockId: (value: string) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
  presentation: {
    current: "",
    name: data.name,
    pages: [],
  },
  setPresentation: () => {},
  selectedBlockId: '',
  setSelectedBlockId: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
  const [presentation, setPresentation] = useState<Doc>({
    current: "",
    name: data.name,
    pages: [],
  });
  const [selectedBlockId, setSelectedBlockId] = useState<string>('')

  const handleSetPresentation = (newPresentation: Doc) => {
    setPresentation({ ...newPresentation });
  };

  const handleSetSelectedBlockId = (newSelectedBlockId: string ) => {
    setSelectedBlockId(newSelectedBlockId)
  }

  return (
    <PresentationContext.Provider
      value={{
        presentation,
        setPresentation: handleSetPresentation,
        selectedBlockId,
        setSelectedBlockId: handleSetSelectedBlockId,
      }}
      children={children}
    />
  );
}

export default PresentationProvider;