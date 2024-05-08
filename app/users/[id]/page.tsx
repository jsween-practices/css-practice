const page = ({ params }: { params: { id: string } }) => {
  return <div>ID Page! {params.id}</div>;
};

export default page;
