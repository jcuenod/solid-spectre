import { Component } from 'solid-js'

type ITileContent = {
}
type ITile = {
	"tile-icon"?: string
	"tile-content": ITileContent
	"tile-action"?: JSX.Element
}
type ITileProps = {
	tiles: ITile[]
}

const Tile: Component<ITileProps> = (props) => {
	return (
		<>
			<div class="tile">
				<div class="tile-icon">
					<div class="example-tile-icon">
						<i class="icon icon-file centered"></i>
					</div>
				</div>
				<div class="tile-content">
					<p class="tile-title">The Avengers</p>
					<p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
				</div>
				<div class="tile-action">
					<button class="btn btn-primary">Join</button>
				</div>
			</div>
			<div class="tile ">
				<div class="tile-icon">
					<figure class="avatar avatar-lg"><img src="../img/avatar-3.png" alt="Avatar" /></figure>
				</div>
				<div class="tile-content">
					<p class="tile-title">The Avengers</p>
					<p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
				</div>
				<div class="tile-action">
					<button class="btn btn-primary">Join</button>
					<button class="btn">Contact</button>
				</div>
			</div>
			<div class="tile">
				<div class="tile-icon">
					<figure class="avatar avatar-lg"><img src="../img/avatar-2.png" alt="Avatar" /></figure>
				</div>
				<div class="tile-content">
					<p class="tile-title">The S.H.I.E.L.D.</p>
					<p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
					<p>
						<button class="btn btn-primary btn-sm">Join</button>
						<button class="btn btn-sm">Contact</button>
					</p>
				</div>
			</div>
			<div class="tile tile-centered">
				<div class="tile-icon">
					<div class="example-tile-icon">
						<i class="icon icon-file centered"></i>
					</div>
				</div>
				<div class="tile-content">
					<div class="tile-title">spectre-docs.pdf</div>
					<small class="tile-subtitle text-gray">14MB · Public · 1 Jan, 2017</small>
				</div>
				<div class="tile-action">
					<button class="btn btn-link">
						<i class="icon icon-more-vert"></i>
					</button>
				</div>
			</div>
		</>
	)
}
export default Tile