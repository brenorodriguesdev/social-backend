create table user_account 
(id serial primary key, 
 name text NOT NULL,
 email text NOT NULL,
 password text NOT NULL
 );


create table user_invite
(id serial primary key, 
 id_user serial NOT NULl,
 id_guest serial NOT NULL,
 view boolean,
 FOREIGN KEY (id_user) REFERENCES user_account(id),
 FOREIGN KEY (id_guest) REFERENCES user_account(id));

create table friend_list
(id serial primary key, 
 id_user serial NOT NULl,
 id_guest serial NOT NULL,
 FOREIGN KEY (id_user) REFERENCES user_account(id),
 FOREIGN KEY (id_guest) REFERENCES user_account(id));

create table chat
(id serial primary key, 
 id_sender serial NOT NULl,
 id_receiver serial NOT NULL,
 FOREIGN KEY (id_sender) REFERENCES user_account(id),
 FOREIGN KEY (id_receiver) REFERENCES user_account(id));

create table message
(id serial primary key, 
 id_chat serial NOT NULl,
 FOREIGN KEY (id_chat) REFERENCES chat(id));
