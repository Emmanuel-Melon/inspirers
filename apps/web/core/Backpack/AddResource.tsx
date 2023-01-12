import React, { FC, useState } from "react";
import { AddResourceForm } from "./AddResourceForm";
import { UploadView } from "./UploadView";
import { InviteCompanionView } from "./InviteCompanionView";
import { ExpandedResourceView } from "./ExpandedResourceView";
import { Backpack } from "@prisma/client";

type AddResourceState = "success" | "error" | "loading" | "empty";

type AddResourceViewMap = {
  [key in AddResourceView]: any;
};

type AddResourceView = "form" | "invite" | "video" | "image" | "expanded";

type AddResourceProps = {
  backpack?: Backpack;
};

export const AddResource: FC<AddResourceProps> = ({ backpack = {} }) => {
  const [view, setView] = useState<AddResourceView>("form");
  const toggleView = (view: AddResourceView) => {
    setView(view);
  };

  const previousView = () => {
    setView("form");
  };
  return (
    <>
      {view === "form" && (
        <AddResourceForm toggleView={toggleView} backpack={backpack} />
      )}
      {view === "invite" && (
        <InviteCompanionView
          previousView={previousView}
          toggleView={toggleView}
        />
      )}
      {view === "image" && (
        <UploadView previousView={previousView} toggleView={toggleView} />
      )}
      {view === "video" && (
        <UploadView previousView={previousView} toggleView={toggleView} />
      )}
      {view === "expanded" && (
        <ExpandedResourceView
          previousView={previousView}
          toggleView={toggleView}
        />
      )}
    </>
  );
};
