import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePosition extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangePositionPortfolio = this.onChangePositionPortfolio.bind(this);
    this.onChangePositionProtocol = this.onChangePositionProtocol.bind(this);
    this.onChangePositionAsset = this.onChangePositionAsset.bind(this);
    this.onChangePositionAssetType = this.onChangePositionAssetType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      portfolio: '',
      protocol: '',
      asset: '',
      assetType: ''
    }
  }

  onChangePositionPortfolio(e) {
    this.setState({portfolio: e.target.value})
  }

  onChangePositionProtocol(e) {
    this.setState({protocol: e.target.value})
  }

  onChangePositionAsset(e) {
    this.setState({asset: e.target.value})
  }

  onChangePositionAssetType(e) {
    this.setState({assetType: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const positionObject = {
      portfolio: this.state.portfolio,
      protocol: this.state.protocol,
      asset: this.state.asset
    };
    axios.post('http://localhost:4000/positions/create-position', positionObject)
      .then(res => console.log(res.data));



    console.log(`Position successfully created!`);
    console.log(`Portfolio: ${this.state.portfolio}`);
    console.log(`Protocol: ${this.state.protocol}`);
    console.log(`Asset: ${this.state.asset}`);

    this.setState({portfolio: '', protocol: '', asset: '', assetType: ''})
  }

  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Portfolio">
          <Form.Label>Portfolio</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Protocol">
          <Form.Label>Protocol</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Asset">
          <Form.Label>Asset</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="AssetType">
          <Form.Label>Asset Type</Form.Label>
          <Form.Select aria-label="Asset type">
            <option>Open this select menu</option>
            <option value="token">Token</option>
            <option value="pool">Pool</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Position
        </Button>
      </Form>
    </div>);
  }
}