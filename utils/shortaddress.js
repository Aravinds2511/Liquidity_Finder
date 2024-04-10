export const shortenAddress = () =>
  `${address?.slice(0, 12)}....${address.length - 8}`;

export const parseErrorMsg = (e) => {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
};
