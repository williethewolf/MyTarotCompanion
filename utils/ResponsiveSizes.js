import metrics from "./Metrics";

//Responisive
const scaleSize = (size) => (metrics.screenWidth / 375) * size;

const isTablet = metrics.screenWidth >= 768;

export { isTablet, scaleSize };