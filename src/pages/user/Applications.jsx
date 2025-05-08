import { useLoaderData } from "react-router";

const Applications = () => {

    const { jobs: jobsFromLoader, user } = useLoaderData();

    const jobs = jobsFromLoader.filter(job => job.applicants.includes(user._id));

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Applications</h1>
            {jobs.length === 0 ? (
                <p className="text-gray-500">You have not applied to any jobs yet.</p>
            ) : (
                <ul className="space-y-4">
                    {jobs.map(job => (
                        <li key={job._id} className="border p-4 rounded-md">
                            <h2 className="text-xl font-semibold">{job.title}</h2>
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            )}
            <p className="text-gray-500 mt-4">Total Applications: {jobs.length}</p>
        </div>
    )
}

export default Applications;