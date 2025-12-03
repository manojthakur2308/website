export interface JobCardProps {
  id?: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  requirements: string[];
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  type,
  experience,
  requirements,
}) => {
  const formUrl = `https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.POSITION=${encodeURIComponent(title)}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full font-medium">
              {location}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
              {type}
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
              {experience}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-block"
      >
        Apply Now →
      </a>
    </div>
  );
};

export const JobList: React.FC<{ jobs: JobCardProps[] }> = ({ jobs }) => {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};
