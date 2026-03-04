const getStatus = (success: boolean | null) => {
  if (success === null) return 'Pending';
  return success ? 'Yes' : 'No';
};

export default getStatus;
