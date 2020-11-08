import logo from './logo.svg';
import './App.css';
import { createState } from 'solid-js'
import Button from './components/Button/Button'
import Avatar from './components/Avatar/Avatar'
import DropdownMenu from './components/Menu/DropdownMenu'
import { MenuItem } from './components/Menu/MenuItem'
import Divider from './components/Menu/Divider'
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Panel from './components/Panel/Panel';
import Tab from './components/Tab/Tab';

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
				style="padding: 5px"
				left={<div>{state.inputValue || "HEAD"}</div>}
				center={
					<div class="input-group input-inline">
						<input class="form-input" type="text" placeholder="search" />
						<Button type="primary">Search</Button>
					</div>
				}
				right={
					<>
						<DropdownMenu label="Menu One" alignRight>
						<MenuItem>Really</MenuItem>
						<MenuItem>Something else</MenuItem>
						<MenuItem>And another</MenuItem>
							<Divider content="Divider"></Divider>
							<MenuItem badge="2">Item with Badge</MenuItem>
							<MenuItem>Item without badge</MenuItem>
						</DropdownMenu>
						<DropdownMenu label="Other" alignRight>
							<Divider content="WITH TEXT"></Divider>
						<MenuItem badge="2">Item with Badge</MenuItem>
							<MenuItem>Item without badge</MenuItem>
							<MenuItem badge="4">Another badge</MenuItem>
							<Divider></Divider>
						<MenuItem>Another Item</MenuItem>
							<MenuItem>One More</MenuItem>
					</DropdownMenu>
					</>
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
					type="primary"
					badge={"" + state.counter}
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
				<div class="columns">
					<div class="column col-6 col-xs-12">
						<Panel
							title="Fish Fingers"
							navigation={<Tab tabs={[
								{ title: "Music", badge: "3" },
								{ title: "Radio", active: true, badge: true },
								{ title: "Playlists" },
								{ title: "Connect" }
							]} />}
							body={<div>testing</div>}
							footer={<Button>testing</Button>}
						/>
					</div>
					<div class="column col-6 col-xs-12">
						<Panel
							header={<div style="text-align: center; margin: 2em">
								<Avatar
									src={"https://picturepan2.github.io/spectre/img/avatar-2.png"}
									alt={"The hulk"}
									size="large" />
								<div style="margin-top: 1em">THE HULK</div>
							</div>}
							navigation={<Tab tabs={["Profile", "Files", "Tasks"]} active={0} />}
							body={<div>testing</div>}
							footer={<Button>testing</Button>}
						/>
					</div>
				</div>
			</div >
		</>
	)
}

export default App
