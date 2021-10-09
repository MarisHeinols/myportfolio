import React from "react";

const Projectfetch = (props) => {
	const data = props.data;
	return (
		<div className="grid-4 py-3">
			{data.map((project) => {
				return (
					<a
						href={project.GitHub}
						style={{ color: "black" }}
					>
						<ul
							className="card_content"
							key={project.id}
						>
							<img
								className="project-icon"
								src={project.Img}
								alt=""
							></img>
							<h2 className="text-dark">
								{project.Name}
							</h2>
							<h3>
								Laungage:{" "}
								<span className="text-primary">
									{project.Language}
								</span>{" "}
							</h3>
							<h3 className="text-fade">
								{project.Discrption}
							</h3>
						</ul>
					</a>
				);
			})}
		</div>
	);
};
export default Projectfetch;
