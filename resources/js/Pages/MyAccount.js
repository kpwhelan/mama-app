import PasswordResetForm from '@/Components/PasswordResetForm'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import ResetPassword from './Auth/ResetPassword'

function MyAccount(props) {
    const [displayPasswordReset, setDisplayPasswordReset] = useState(false);

    const toggleSetDisplayPasswordReset = () => {
        if (displayPasswordReset) {
            setDisplayPasswordReset(false);
        } else if (!displayPasswordReset) {
            setDisplayPasswordReset(true);
        }
    }

  return (
    <Authenticated
        auth={props.auth}
        errors={props.errors}
    >
        <Head title="My Account" />

        <div className='ml-8 mt-2'>
            <div className="flex justify-around">
                <div className='mr-2 mt-5'>
                <h1 className='text-xl'>Account Details</h1>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.auth.user.first_name} {props.auth.user.last_name}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>Joined: {new Date(props.auth.user.created_at).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
                    <p className='bg-white rounded-xl p-2 w-fit mb-1'>Email: {props.auth.user.email}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>Username: {props.auth.user.username}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.post_count} {props.post_count == 1 ? 'post' : 'posts'}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.comment_count > 0 ? props.comment_count : 0} {props.comment_count == 1 ? 'comment' : 'comments'}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.sub_comment_count > 0 ? props.sub_comment_count : 0} {props.sub_comment_count == 1 ? 'comment reply' : 'comment replies'}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.post_like_count > 0 ? props.post_like_count : 0} {props.post_like_count == 1 ? 'liked post' : 'liked posts'}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.comment_like_count > 0 ? props.comment_like_count : 0} {props.comment_like_count == 1 ? 'liked comment' : 'liked comments'}</p>
                    <p className='bg-white rounded-xl p-2 max-w-fit mb-1'>{props.sub_comment_like_count > 0 ? props.sub_comment_like_count : 0} {props.sub_comment_like_count == 1 ? 'liked comment reply' : 'liked comment replies'}</p>
                </div>

                <div className=''>
                    <button onClick={toggleSetDisplayPasswordReset} className="inline-flex items-center mr-1 px-4 py-2 bg-sage border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">Change Password</button>
                    <button className="inline-flex items-center ml-1 px-4 py-2 bg-red-500/75 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">Delete Account</button>

                    {displayPasswordReset &&
                        <PasswordResetForm userId={props.auth.user.id} />
                    }
                </div>
            </div>
        </div>

    </Authenticated>
  )
}

export default MyAccount
