import "./index.css";
class card {
constructor(props){
  this.props = props;
}
render() {
  return `<div class="card">${this.props.content}</div>`;
}

}
export default card;
