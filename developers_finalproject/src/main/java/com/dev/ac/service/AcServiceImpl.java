package com.dev.ac.service;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.ac.dao.AcDao;
import com.dev.ac.dto.AcPay;
import com.dev.ac.dto.Accommodation;

@Service
public class AcServiceImpl implements AcService {
	
	@Autowired
	private AcDao dao;
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public List<Accommodation> acListAll() {
		return dao.acListAll(session);
	}

	@Override
	public List<Accommodation> searchListAll(Map param) {
		return dao.acSearchAll(session,param);
	}

	@Override
	public Accommodation acDetail(int no) {
		return dao.acDetail(session,no);
	}

	@Override
	public Accommodation acPay(int no) {
		return dao.acPay(session,no);
	}
	
	@Override
	public AcPay checkPayRefund(int no) {
		return dao.checkPayRefund(session,no);
	}
	
	@Override
	public int insertPay(Map param) {
		return dao.insertPay(session,param);
	}
	
	@Override
	public int deletePay(int apId) {
		return dao.deletePay(session,apId);
	}
	
	@Override
	public List<Accommodation> acRefundTest() {
		return dao.acRefundTest(session);
	}

	@Override
	public int insertHeart(Map param) {	
		return dao.insertHeart(session,param);
	}
	
	@Override
	public int deleteHeart(Map param) {	
		return dao.deleteHeart(session,param);
	}
}
