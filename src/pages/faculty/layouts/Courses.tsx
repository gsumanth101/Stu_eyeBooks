import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface UniversityDetail {
  university: string;
  year: number;
  stream: string;
}

interface Course {
  name: string;
  description: string;
  universityDetails: UniversityDetail[];
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('../data.json');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Box>
      {courses.map((course, index) => (
        <Card key={index} sx={{ userSelect: 'none', mb: 2 }}>
          <CardContent>
            <Box mt={1.5}>
              <Typography variant="h6" color="text.primary" fontWeight={600}>
                {course.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {course.description}
              </Typography>
            </Box>

            <Box mt={1.5}>
              <Typography variant="body1" color="text.primary" fontWeight={500}>
                University Details:
              </Typography>
              {course.universityDetails.map((detail, idx) => (
                <Box key={idx} mt={1}>
                  <Typography variant="body2" color="text.secondary">
                    University ID: {detail.university}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: {detail.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stream: {detail.stream}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Courses;