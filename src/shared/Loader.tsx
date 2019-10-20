import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2)
    }
  })
);

export default function Loader() {
  const classes = useStyles("defaultTheme");
  return (
    <div className="progress">
      <CircularProgress className={classes.progress} />
    </div>
  );
}
