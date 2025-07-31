
const Pagination = () => {
    return (
        <>
            <div className="pagination flex justify-end gap-1 px-5">
                <span className="rounded-md border border-primary text-textColor bg-primary active py-1 font-bold px-3">১</span>
                <span className="rounded-md border border-primary py-1 text-primary font-bold px-3">২</span>
                <span className="rounded-md border border-primary py-1 text-primary font-bold px-3">৩</span>
                <span className="rounded-md border border-primary py-1 text-primary font-bold px-3">৪</span>
                <span className="rounded-md border border-primary py-1 text-primary font-bold px-3">৫</span>
            </div>
        </>
    );
};

export default Pagination;