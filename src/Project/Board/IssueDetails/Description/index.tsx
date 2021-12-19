import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { Title, EmptyLabel, Actions } from "./Styles";
import {
  Button,
  TextEditedContent,
  TextEditor,
} from "../../../../shared/components";
import { getTextContentsFromHtmlString } from "../../../../shared/utils/browser";

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsDescription = ({ issue, updateIssue }) => {
  const [description, setDescription] = useState(issue.description);
  const [isEditing, setEditing] = useState(false);

  const handleUpdate = () => {
    setEditing(false);
    updateIssue({ description });
  };

  const isDescriptionEmpty =
    getTextContentsFromHtmlString(description).trim().length === 0;

  return (
    <Fragment>
      <Title>Description</Title>
      {isEditing ? (
        <Fragment>
          <TextEditor
            placeholder="Describe the issue"
            defaultValue={description}
            onChange={setDescription}
          />
          <Actions>
            {/* @ts-ignore */}
            <Button variant="primary" onClick={handleUpdate}>
              Save
            </Button>
            {/* @ts-ignore */}
            <Button variant="empty" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </Actions>
        </Fragment>
      ) : (
        <Fragment>
          {isDescriptionEmpty ? (
            <EmptyLabel onClick={() => setEditing(true)}>
              Add a description...
            </EmptyLabel>
          ) : (
            <TextEditedContent
              content={description}
              onClick={() => setEditing(true)}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsDescription.propTypes = propTypes;

export default ProjectBoardIssueDetailsDescription;
