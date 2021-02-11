interface Props {
  children?: React.ReactNode;
}

const App = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default App;
