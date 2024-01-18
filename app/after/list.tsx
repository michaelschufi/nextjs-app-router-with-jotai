"use client";

import { useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/react/utils";
import { filteredListAtom, listAtom } from "../atoms";

type Props = {
  initialList: number[];
};

export const List = ({ initialList }: Props) => {
  const filteredList = useAtomValue(filteredListAtom);

  useHydrateAtoms([[listAtom, initialList]]);

  console.log("after: initialList", initialList);
  console.log("after: filteredList", filteredList);

  return (
    <div className="flex-col gap-2">
      {filteredList.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
};
