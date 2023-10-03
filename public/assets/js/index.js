// Variables
let task_counter = 0;
let task_title = "Task";
let dlt;

// get today's date
const today = new Date();
const date = `${today.getDate()}/${
	today.getMonth() + 1
}/${today.getFullYear()}`;

// Variables

// Task Objects
const todo_object = {};
const in_progress_object = {};
const done_object = {};
// Task Objects

// Todo Task Setter
function todo_object_setter(obj) {
	obj["task_" + task_counter] = {
		code: `
        <div
        class="h-auto bg-white md:rounded-xl rounded-2xl mx-2 my-2 px-3 py-1"
        id="task-${task_counter}"
        >
        <div class="">
            <div class="flex justify-between">
                <div class="flex">
                    <img
                        class="w-4"
                        src="assets/icons/black-dot-sign.svg"
                        alt="Black Dot"
                    />
                    <h1
                        class="px-1 text-secondary-500"
                        id="task-no"
                    >
                        Task #${task_counter}
                    </h1>
                </div>
                <div class="flex">
                    <a href="#">
                        <div
                            class="w-4 h-4 rounded-full bg-priority-normal m-1"
                            id="priority"
                        ></div>
                    </a>
                    <div>
                        <a
                            href="#"
                            class="dlt-task"
                            id="delete-task-${task_counter}"
                        >
                            <img
                                class="w-6"
                                src="assets/icons/delete-icon.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
    
            <div class="flex justify-between">
                <div class="flex">
                    <img
                        class="w-14 flex flex-col justify-center"
                        src="assets/icons/profile-pic.svg"
                        alt=""
                    />
                    <div class="flex flex-col justify-center ml-2">
                        <div
                            class="font-semibold"
                            id="task-name"
                        >
                            <h1>${task_title}</h1>
                        </div>
                        <div
                            class="text-xs text-secondary-500"
                            id="creation-date"
                        >
                            <h3>Creation Date: ${date}</h3>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <a
                        href="#"
                        id="forward-sign"
                    >
                        <img
                            class="w-6 mb-1 transform md:rotate-0 rotate-90"
                            src="assets/icons/forward-sign.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
        </div>
            `,
	};
}
// Todo Task Setter

// In Progress Task Setter
function in_Progress_Object_Setter(obj) {
	obj["task_" + task_counter] = {
		code: `
        <div
        class="h-auto bg-white md:rounded-xl rounded-2xl mx-2 my-2 px-3 py-1"
        id="task-${task_counter}"
    >
        <div class="">
            <div class="flex justify-between">
                <div class="flex">
                    <img
                        class="w-4"
                        src="assets/icons/black-dot-sign.svg"
                        alt="Black Dot"
                    />
                    <h1
                        class="px-1 text-secondary-500"
                        id="task-no"
                    >
                        Task #${task_counter}
                    </h1>
                </div>
                <div class="flex">
                    <a href="#">
                        <div
                            class="w-4 h-4 rounded-full bg-priority-normal m-1"
                            id="priority"
                        ></div>
                    </a>
                    <div>
                        <a
                            href="#"
                            class="dlt-task"
                            id="delete-task-${task_counter}"
                        >
                            <img
                                class="w-6"
                                src="assets/icons/delete-icon.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex justify-between">
                <div class="flex">
                    <img
                        class="w-14 flex flex-col justify-center"
                        src="assets/icons/profile-pic.svg"
                        alt=""
                    />
                    <div class="flex flex-col justify-center ml-2">
                        <div
                            class="font-semibold"
                            id="task-name"
                        >
                            <h1>${task_title}</h1>
                        </div>
                        <div class="text-xs text-secondary-500">
                            <h3>Creation Date: ${date}</h3>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col justify-end">
                        <a
                            href="#"
                            id="backward-sign"
                        >
                            <img
                                class="w-6 mb-1 transform md:rotate-0 rotate-90"
                                src="assets/icons/backward-sign.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="flex flex-col justify-end">
                        <a
                            href="#"
                            id="forward-sign"
                        >
                            <img
                                class="w-6 mb-1 transform md:rotate-0 rotate-90"
                                src="assets/icons/forward-sign.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `,
	};
}
// In Progress Task Setter

// Done Task Setter
function done_Object_Setter(obj) {
	obj["task_" + task_counter] = {
		code: `
        <div
							class="h-auto bg-white md:rounded-xl rounded-2xl mx-2 my-2 px-3 py-1"
                            id="task-${task_counter}"
                            >
							<div class="">
								<div class="flex justify-between">
									<div class="flex">
										<img
											class="w-4"
											src="assets/icons/black-dot-sign.svg"
											alt="Black Dot"
										/>
										<h1
											class="px-1 text-secondary-500"
											id="task-no"
										>
											Task #${task_counter}
										</h1>
									</div>
									<div class="flex">
										<a href="#">
											<div
												class="w-4 h-4 rounded-full bg-priority-normal m-1"
												id="priority"
											></div>
										</a>
										<div>
											<a
												href="#"
                                                class="dlt-task"
												id="delete-task-${task_counter}"
											>
												<img
													class="w-6"
													src="assets/icons/delete-icon.svg"
													alt=""
												/>
											</a>
										</div>
									</div>
								</div>

								<div class="flex justify-between">
									<div class="flex">
										<img
											class="w-14 flex flex-col justify-center"
											src="assets/icons/profile-pic.svg"
											alt=""
										/>
										<div class="flex flex-col justify-center ml-2">
											<div
												class="font-semibold"
												id="task-name"
											>
												<h1>${task_title}</h1>
											</div>
											<div class="text-xs text-secondary-500">
												<h3>Creation Date: ${date}</h3>
											</div>
										</div>
									</div>
									<div class="flex flex-col justify-end">
										<a
											href="#"
											id="backward-sign"
										>
											<img
												class="w-6 mb-1 transform md:rotate-0 rotate-90"
												src="assets/icons/backward-sign.svg"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
		</div>
            `,
	};
}
// Done Task Setter

// Menu button
const menu_btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menu_btn.addEventListener("click", function () {
	menu.classList.toggle("hidden");
});
// Menu button

// Project name change
const edit_Task_name = document.querySelector("#edit-project-name");

edit_Task_name.addEventListener("click", () => {
	const project_name = document.querySelector("#project-name");
	project_name.textContent = prompt("Enter new project name");
});
// Project name change

// Todo Handler
const todo_card = document.querySelector("#todo-card");
const add_todo_task = document.querySelector("#add-todo-task");

add_todo_task.addEventListener("click", () => {
	task_counter += 1;
	todo_object_setter(todo_object);
	todo_card.innerHTML += todo_object["task_" + task_counter].code;
	todo_counter = document.querySelector("#todo-counter");
	todo_counter.textContent = Object.keys(todo_object).length;
	dlt = document.querySelectorAll(".dlt-task");
	dlt_task();
});

// Todo Handler

// In Progress Handler
const in_progress_card = document.querySelector("#in-progress-card");
const add_in_progress_task = document.querySelector("#add-in-progress-task");

add_in_progress_task.addEventListener("click", () => {
	task_counter += 1;
	in_Progress_Object_Setter(in_progress_object);
	in_progress_card.innerHTML += in_progress_object["task_" + task_counter].code;
	inProgress_counter = document.querySelector("#in-progress-counter");
	inProgress_counter.textContent = Object.keys(in_progress_object).length;
	dlt = document.querySelectorAll(".dlt-task");
	dlt_task();
});
// In Progress Handler

// In Done Handler
const done_card = document.querySelector("#done-card");
const add_done_task = document.querySelector("#add-done-task");

add_done_task.addEventListener("click", () => {
	task_counter += 1;
	done_Object_Setter(done_object);
	done_card.innerHTML += done_object["task_" + task_counter].code;
	done_counter = document.querySelector("#done-counter");
	done_counter.textContent = Object.keys(done_object).length;
	dlt = document.querySelectorAll(".dlt-task");
	dlt_task();
});

// In Done Handler

function dlt_task() {
	dlt.forEach((element) => {
		element.addEventListener("click", () => {
			try {
				const id = element.id;
				let matches = id.match(/(\d+)/);
				document.querySelector("#task-" + matches[0]).remove();
			} catch (error) {}
		});
	});
}
