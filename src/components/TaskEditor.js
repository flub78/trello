import React from 'react';

const TaskEditor = ({ task }) => {
    return (

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{task.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className='form-container'>
                            <div className='flex-container blog-container'>
                                <form >

                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea name="description" id="description" placeholder="Description" required className="form-control"></textarea>

                                    <div className="form-check form-switch m-2">
                                        <input className="form-check-input" type="checkbox" id="formSwitchCheckChecked" />
                                        <label className="form-check-label" for="formSwitchCheckChecked">Suivre la tâche</label>
                                    </div>

                                    <div className="form-check form-check-inline bg-warning m-1 rounded-3">
                                        <input className="form-check-input  ms-1 p-1" type="checkbox" value="" id="inlineCheckDefault" />
                                        <label className="form-check-label m-1" for="inlineCheckDefault"></label>
                                    </div>
                                    <div className="form-check form-check-inline bg-danger m-1 rounded-3">
                                        <input className="form-check-input ms-1 p-1" type="checkbox" value="" id="inlineCheckChecked" />
                                        <label className="form-check-label m-1" for="inlineCheckChecked"></label>
                                    </div>
                                    <div className="form-check form-check-inline bg-primary m-1 rounded-3">
                                        <input className="form-check-input ms-1 p-1" type="checkbox" value="" id="inlineCheckChecked" />
                                        <label className="form-check-label m-1" for="inlineCheckChecked"></label>
                                    </div>
                                    <div className="form-check form-check-inline bg-success m-1 rounded-3">
                                        <input className="form-check-input ms-1 p-1" type="checkbox" value="" id="inlineCheckChecked" />
                                        <label className="form-check-label m-1" for="inlineCheckChecked"></label>
                                    </div>
                                    <div className="form-check form-check-inline bg-secondary m-1 rounded-3">
                                        <input className="form-check-input ms-1 p-1" type="checkbox" value="" id="inlineCheckChecked" />
                                        <label className="form-check-label m-1" for="inlineCheckChecked"></label>
                                    </div>
                                    <div className="form-check form-check-inline bg-dark m-1 rounded-3">
                                        <input className="form-check-input ms-1 p-1" type="checkbox" value="" id="inlineCheckChecked" />
                                        <label className="form-check-label m-1" for="inlineCheckChecked"></label>
                                    </div>

                                    <div className="m-4 text-center">
                                        <input type="submit" value="Sauver" className="btn btn-secondary" />
                                    </div>
                                </form>
                            </div>
                            <div className='form-message'>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Sauver</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskEditor;