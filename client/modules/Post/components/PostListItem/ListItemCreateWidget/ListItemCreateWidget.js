import React, { Component, PropTypes } from 'react';
import { Card, Collapse, Button, Form, FormGroup, Input } from 'reactstrap';

export class ListItemCreateWidget extends Component {
  
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  addListItem = (e) => {
    e.preventDefault();
    if (this.textRef.value) {
      this.props.addListItem(this.textRef.value);
      this.textRef.value = '';
    }
  };

  render() {
    return (
      <Card block className='list-item-create'>
        <Form onSubmit={this.addListItem}>
          <FormGroup>
            <Input
              onFocus={this.toggle}
              onBlur={this.toggle}
              placeholder="A new item..."
              getRef={ref => {this.textRef = ref}}
              type="text" />
          </FormGroup>
          <Collapse isOpen={this.state.collapse}>
            <Button onMouseDown={this.addListItem}>Add Item</Button>
          </Collapse>
        </Form>
      </Card>
    );
  }
}

ListItemCreateWidget.propTypes = {
  addListItem: PropTypes.func.isRequired,
};

export default ListItemCreateWidget;
