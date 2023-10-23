const getSubString = (feature, len) => {
    if(feature.length > len){
      return feature.substring(0, len) + '...';
    } else {
      return feature;
    }
  };

export default getSubString;