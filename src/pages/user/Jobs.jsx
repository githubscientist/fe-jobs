import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { selectJobs, setJobs } from "../../redux/features/jobs/jobSlice";

const Jobs = () => {

    const jobsFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const jobs = useSelector(selectJobs);

    useEffect(() => {
        dispatch(setJobs(jobsFromLoader));
    }, [dispatch, jobsFromLoader]);

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);

    return (
        <div>Jobs</div>
    )
}

export default Jobs;