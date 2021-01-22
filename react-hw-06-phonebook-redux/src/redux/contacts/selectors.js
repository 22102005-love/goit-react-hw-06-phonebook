export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
