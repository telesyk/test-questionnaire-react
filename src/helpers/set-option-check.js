function setOptionCheck(options, id) {
  return options.map((option) => {
    if (id !== option.id) {
      // eslint-disable-next-line
      option.checked = false;
    } else {
      // eslint-disable-next-line
      option.checked = true;
    }
    return option;
  });
}

export default setOptionCheck;
