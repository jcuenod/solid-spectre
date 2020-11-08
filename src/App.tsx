import logo from './logo.svg';
import './App.css';
import { createState, Component } from 'solid-js'
import Button from './components/Button/Button'
import Avatar from './components/Avatar/Avatar'
import DropdownMenu from './components/Menu/DropdownMenu'
import { MenuItem } from './components/Menu/MenuItem'
import Divider from './components/Menu/Divider'
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Panel from './components/Panel/Panel';

type state = {
  showModal: boolean
  inputValue: string
  counter: number
  buttonSize: "normal" | "small" | "large"
  toggle: boolean
}
const initialState: state = {
  showModal: false,
  inputValue: "",
  counter: 3,
  buttonSize: "normal",
  toggle: false
}
function App() {
  const [state, setState] = createState(initialState)

  return (
    <>
      <Navbar
        left={<div>HEAD</div>}
        center={
          <div class="input-group input-inline">
            <input class="form-input" type="text" placeholder="search" />
            <Button type="primary">Search</Button>
          </div>
        }
        right={
          <DropdownMenu label="Menu Test" alignRight>
            <MenuItem>Really</MenuItem>
            <MenuItem>Something</MenuItem>
            <MenuItem>Divider...</MenuItem>
            <Divider></Divider>
            <MenuItem>Something else</MenuItem>
            <MenuItem>And another</MenuItem>
            <Divider content="Divider WITH TEXT"></Divider>
            <MenuItem badge="2">Item with Badge</MenuItem>
            <MenuItem>Another Item</MenuItem>
          </DropdownMenu>
        }
      />
      <div style="margin: 10px">
        <Button leftIconName="edit"
          onClick={() => {
            console.log("fish2")
            console.log(state.showModal)
            setState({ showModal: true })
          }}
          disabled={state.toggle}
        >Hello World</Button>
        <br />
        <br />
        <Button
          size={state.buttonSize}
          type="primary" badge={"" + state.counter}
          onClick={() => {
            console.log(state.counter)
            setState({ counter: state.counter + 1 })
            console.log(state.buttonSize)
            setState({ buttonSize: "large" })
            setState({ toggle: !state.toggle })
            console.log(state.toggle)
            console.log(state.buttonSize)
          }}
        >A large primary button + badge (= {"" + state.counter})</Button>
        <br />
        <br />
        <Avatar initial="JC" size="large" presence="online"></Avatar>
        <br />
        <span>s:{JSON.stringify(state.showModal)}</span>
        <br />
        <Modal
          show={state.showModal}
          hideEvent={() => setState({ showModal: false })}
        >
          <div>Fish are friends, not food
            <input type="text" onInput={(e) => setState({ inputValue: e.target.value })}></input>
            <span>{state.inputValue}</span>
          </div>
        </Modal>
        <Panel
          title="Fish Fingers"
          navigation={<Button>testing</Button>}
          body={<div>testing</div>}
          footer={<Button>testing</Button>}
        />
      </div >
    </>
  )
}

export default App
