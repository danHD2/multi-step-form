function Separator({ everything }) {
  if (everything.service || everything.storage || everything.profile) {
    return <div className="border-lightGray border my-5"></div>;
  }
}

export default Separator;
