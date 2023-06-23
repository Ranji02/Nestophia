// package com.example.demo.repository;

// import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// // import org.springframework.data.repository.CrudRepository;

// import com.example.demo.model.User;

// public interface UserRepository extends JpaRepository<User, Integer> {
//     public boolean existsByEmail(String email);

//     public boolean existsByPassword(String password);

//     public List<User> findByEmail(String email);
    
//     @Query("select coalesce(max(u.user_id), 0) from User u")
//     public Integer findMaxId();
// }


package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    public boolean existsByEmail(String email);

    public boolean existsByPassword(String password);

    public List<User> findByEmail(String email);

    // public User findByUser(Integer user);
    
    @Query("select coalesce(max(u.user_id), 0) from User u")
    public Integer findMaxId();

    @Query("select u from User u  join House h on h.houseowner_id = u.user_id")
    public User getSingleUser();
}
