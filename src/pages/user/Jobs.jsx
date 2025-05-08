import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { selectJobs, setJobs } from "../../redux/features/jobs/jobSlice";
import jobServices from "../../services/jobServices";
import { toast } from "react-toastify";

const Jobs = () => {

    const { jobs: jobsFromLoader, user } = useLoaderData();

    const dispatch = useDispatch();

    const jobs = useSelector(selectJobs);

    useEffect(() => {
        dispatch(setJobs(jobsFromLoader));
    }, [dispatch, jobsFromLoader]);

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);

    const handleApply = async (jobId) => {
        window.confirm("Are you sure you want to apply for this job?") && jobServices.applyJob(jobId)
            .then((res) => {
                toast.success(res.data.message);
                const updatedJobs = jobs.map((job) => {
                    if (job._id === jobId) {
                        return { ...job, applicants: [...job.applicants, user._id] };
                    }
                    return job;
                });
                dispatch(setJobs(updatedJobs));
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Jobs</h1>
            <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-3 mb-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="space-y-4">
                {
                    jobs.map((job) => (
                        <div
                            key={job._id}
                            className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{job.title}</h2>
                                <p
                                    className="text-sm text-gray-600"
                                >{job.postedBy?.name || 'Company Name'}</p>
                                <p className="text-sm mt-1 text-gray-700">
                                    {job.description}
                                </p>
                            </div>

                            {
                                job.applicants.includes(user._id)
                                    ? <button
                                        className="px-4 py-2 bg-gray-300 text-white rounded-md"
                                        disabled
                                    >
                                        Applied
                                    </button>
                                    : <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"

                                        onClick={() => handleApply(job._id)}
                                    >
                                        Apply
                                    </button>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Jobs;