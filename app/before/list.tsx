"use client";

import { useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/react/utils";
import { filteredListAtom, listAtom } from "../atoms";

type Props = {
  initialList: number[];
};

export const List = ({ initialList }: Props) => {
  useHydrateAtoms([[listAtom, initialList]]);

  const filteredList = useAtomValue(filteredListAtom);

  console.log("before: initialList", initialList);
  console.log("before: filteredList", filteredList);

  return (
    <div className="flex-col gap-2">
      {filteredList.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
};
