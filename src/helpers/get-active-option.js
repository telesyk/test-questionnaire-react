function getActiveOption(options, id) {
  return options.find((option) => option.id === id);
}

export default getActiveOption;
