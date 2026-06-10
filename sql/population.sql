-- Population of the Typed table

INSERT INTO typed (phrase) VALUES('Software Scientist');
INSERT INTO typed (phrase) VALUES('Agile Web Developer');
INSERT INTO typed (phrase) VALUES('JavaScript junkie');
INSERT INTO typed (phrase) VALUES('Object-Oriented Programmer');
INSERT INTO typed (phrase) VALUES('Technological literate');
INSERT INTO typed (phrase) VALUES('Aeronautics enthusiast');
INSERT INTO typed (phrase) VALUES('Peace officer');



-- Population of the Skills table

--Frontend skills
INSERT INTO skills (name, category) VALUES('HTML', 'Frontend');
INSERT INTO skills (name, category) VALUES('CSS', 'Frontend');
INSERT INTO skills (name, category) VALUES('Bootstrap', 'Frontend');
INSERT INTO skills (name, category) VALUES('JavaScript', 'Frontend');
INSERT INTO skills (name, category) VALUES('React', 'Frontend');
INSERT INTO skills (name, category) VALUES('Redux', 'Frontend');
INSERT INTO skills (name, category) VALUES('jQuery', 'Frontend');
INSERT INTO skills (name, category) VALUES('AlpineJS', 'Frontend');

--Backend skills
INSERT INTO skills (name, category) VALUES('NodeJS', 'Backend');
INSERT INTO skills (name, category) VALUES('ExpressJS', 'Backend');
INSERT INTO skills (name, category) VALUES('HandlebarsJS', 'Backend');

-- Storage
INSERT INTO skills (name, category) VALUES('PostgreSQL', 'Storage');
INSERT INTO skills (name, category) VALUES('MongoDB', 'Storage');
INSERT INTO skills (name, category) VALUES('Mongoose', 'Storage');

-- Testing
INSERT INTO skills (name, category) VALUES('Mocha & Chai', 'Software Testing');

-- Version control
INSERT INTO skills (name, category) VALUES('Git', 'Version Control');
INSERT INTO skills (name, category) VALUES('GitHub', 'Version Control');



-- Population of the Projects table

--The Pig Game project
INSERT INTO projects (name, image_url, description, url) VALUES('Pig Game', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/project2.png?raw=true',
'This is a simple two-player dice game where a player roll a dice multiple times and accumulate a current score until they decide to Hold the current score, in which case the current score gets added to the global score.',
'https://avile-sindelo.github.io/piggame/');


--The Tic Tac Toe project
INSERT INTO projects (name, image_url, description, url) VALUES('Tic Tac Toe', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/project1.png?raw=true',
'This is a simple two-player game of X and O.',
'https://avile-sindelo.github.io/tictactoe/');


-- The Shoes API project
INSERT INTO projects (name, image_url, description, url) VALUES('Digital shoe store', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/shoes-api.jpg?raw=true',
'This is a simple digital shoe store where you can find shoes of different brands, sizes and colours.',
'https://shoes-api-chdd.onrender.com');


-- The Waiter registration project
INSERT INTO projects (name, image_url, description, url) VALUES('Waiter management webapp', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/waiter_webapp.jpg?raw=true',
'This is a web application that allows a business to manage their waiter roaster',
'https://waiter-webapp-x2xc.onrender.com');



-- The Yo-Kulca project
INSERT INTO projects (name, image_url, description, url) VALUES('Yo-Kulca clothing brand website', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/project2.png?raw=true',
'This is an introductory website for a local clothing brand called "Yo-Kulca" that is based in Mthatha in the Eastern Cape.',
'http://yokulca.freevar.com/');



  -- Registration numbers
INSERT INTO projects (name, image_url, description, url) VALUES('Western Cape registration numbers', 
'https://github.com/Avile-Sindelo/bio-fullstack/blob/main/public/images/reg_webapp.jpg?raw=true',
'This is a web application through which you can manage vehicle registration numbers from certain regions of the Western Cape province.',
'https://registrationwebapp.onrender.com');

         --MORE PROJECTS STILL TO BE POPULATED
 
  -- Settings bill
  --
  