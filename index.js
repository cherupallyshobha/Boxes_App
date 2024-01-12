const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxText } = props;

  <div className={boxCls}>
    <p className="boxText">{boxText}</p>
  </div>;
};

const element = (
  //  Write your code here.
  <div className="Box-bg-container">
    <h1 className="box-heading">Box</h1>

    <div className="box-container">
      <Box boxCls="box-small" boxText="small" />
      <Box boxCls="box-medium" boxText="medium" />
      <Box boxCls="box-large" boxText="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
