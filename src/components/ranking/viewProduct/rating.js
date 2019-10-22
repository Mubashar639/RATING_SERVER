import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { CreateReview } from "../../../Redux/Epics/review"
import { connect } from "react-redux"


const MyRating = (props) => {
  const [value, setValue] = React.useState(2);

  const postRating = (rating) => {
    setValue(rating)
    let object = { rating, pid: props.pid, }
    props.Review(object)
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            postRating(newValue);
          }}
          size="large"
        />
      </Box>

    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  user: state.Login.user
})

const mapDispatchToProps = dispacth => ({
  Review: (prameter) => dispacth(CreateReview(prameter))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyRating)