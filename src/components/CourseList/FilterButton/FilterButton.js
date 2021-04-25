import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const FilterButton = (props) => {
  const classes = useStyles();
  const { courseType, onChangeIndex } = props;
  const { courseIndex } = props;
  const { onfetchCourseIndex } = props;

  useEffect(() => {
    onfetchCourseIndex();
  }, [onfetchCourseIndex]);
  const group2 = [
    "BACK END ",
    "WEB",
    "ANGULAR",
    "FRONT END /UI",
    "FULL STACK ",
    "JAVA AND C++",
  ];

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
    >
      <InputLabel>Filter by</InputLabel>
      <Select
        value={courseType}
        onChange={(event) => onChangeIndex(event.target.value)}
        label="Filter by"
      >
        <MenuItem value="all">All Topic</MenuItem>
        {courseIndex.map((group, index) => (
          <MenuItem key={group.maDanhMuc} value={group.maDanhMuc}>
            {group2[index]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    courseIndex: state.courses.courseIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchCourseIndex: () => dispatch(actions.fetchCourseIndex()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
