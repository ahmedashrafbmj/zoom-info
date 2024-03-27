import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { FaThumbsUp } from 'react-icons/fa6'
import './style.css'
const MiddleContent = () => {
    return (
        <div className='middle-content'>
            <div class="card">
                <div class="card-header">
                    <div className='profile'>
                        <div className='user-icon'><FaUser color='#727272' className='icon' size={14} /></div>
                        <div className='user-detail'>
                            <h4 className='user-name'>Hello Test</h4>
                            <p className='user-bio'>Hello</p>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                    <ul class="list-group list-group-flush">
                        <li>Cras justo odio</li>
                        <li>Dapibus ac facilisis in</li>
                        <li>Vestibulum at eros</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <div className='profile'>
                        <div className='d-flex gap-2 align-items-center'><FaThumbsUp color='#727272' className='icon' size={14} />
                        <p className='m-0'>Mark as relevant</p></div>
                        <div className='user-detail'>
                            <p className='user-bio m-0'>See additional decisions Makers</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="card my-5">
                <div class="card-header">
                    <div className='profile'>
                        <div className='user-icon'><FaUser color='#727272' className='icon' size={14} /></div>
                        <div className='user-detail'>
                            <h4 className='user-name'>Hello Test</h4>
                            <p className='user-bio'>Hello</p>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                    <ul class="list-group list-group-flush">
                        <li>Cras justo odio</li>
                        <li>Dapibus ac facilisis in</li>
                        <li>Vestibulum at eros</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <div className='profile'>
                        <div className='d-flex gap-2 align-items-center'><FaThumbsUp color='#727272' className='icon' size={14} />
                        <p className='m-0'>Mark as relevant</p></div>
                        <div className='user-detail'>
                            <p className='user-bio m-0'>See additional decisions Makers</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MiddleContent