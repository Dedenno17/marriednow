const getInitialName = (name: string) => {
  let initialName;
  const splitedName = name.split(" ");

  if (splitedName.length > 1) {
    const firstInitial = splitedName[0].charAt(0).toUpperCase;
    const secondInitial = splitedName[1].charAt(0).toUpperCase;
    initialName = `${firstInitial}${secondInitial}`;
  } else {
    const firstInitial = splitedName[0].charAt(0).toUpperCase();
    const secondInitial = splitedName[0].charAt(1).toUpperCase();
    initialName = `${firstInitial}${secondInitial}`;
  }

  return initialName;
};

export default getInitialName;
