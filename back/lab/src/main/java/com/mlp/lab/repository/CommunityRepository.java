package com.mlp.lab.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mlp.lab.entity.Community;

//Buy Entity의 기본키(PK) 타입인 Integer를 인자로 전달
public interface CommunityRepository extends JpaRepository<Community, Integer> {

    @Query("select c from Community c where c.type = '1'")
    Page<Community> selectTipList(org.springframework.data.domain.Pageable pageable);

    @Query("select c from Community c where c.type = '2'")
    Page<Community> selectQnaList(org.springframework.data.domain.Pageable pageable);

    @Query("select c from Community c where c.type = '3'")
    Page<Community> selectReviewList(org.springframework.data.domain.Pageable pageable);

    @Query("select c from Community c where c.type = '4'")
    Page<Community> selectHelpList(org.springframework.data.domain.Pageable pageable);
}
