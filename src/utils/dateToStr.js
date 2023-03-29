import moment from "moment";

const dateToStr = (date) => {

return moment(date).format('MM/DD/YYYY');
}

export default dateToStr;